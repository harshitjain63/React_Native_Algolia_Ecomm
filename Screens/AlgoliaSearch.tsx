import React, {useRef, useState} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {liteClient as algoliasearch} from 'algoliasearch/lite';
import {Configure, InstantSearch} from 'react-instantsearch-core';
import {Filters} from '../components/algolia/Filter';
import {InfiniteHits} from '../components/algolia/InfiniteHits';
import {SearchBox} from '../components/algolia/SearchBox';
import {ProductHit} from '../types/ProductHit';
import {Highlight} from '../components/algolia/Highlight';

const searchClient = algoliasearch(
  '3UBLKPFZLT',
  'fdc05be5afb3a4cc0ed1e713576fe8c0',
);

export default function AlgoliaSearch() {
  const [isModalOpen, setModalOpen] = useState(false);
  const listRef = useRef<FlatList>(null);

  function scrollToTop() {
    listRef.current?.scrollToOffset({animated: false, offset: 0});
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <InstantSearch searchClient={searchClient} indexName="instant_search">
          <Configure highlightPreTag="<mark>" highlightPostTag="</mark>" />
          <SearchBox onChange={scrollToTop} />
          <Filters
            isModalOpen={isModalOpen}
            onToggleModal={() => setModalOpen(!isModalOpen)}
            onChange={scrollToTop}
          />
          <InfiniteHits ref={listRef} hitComponent={Hit} />
        </InstantSearch>
      </View>
    </SafeAreaView>
  );
}

type HitProps = {
  hit: ProductHit;
};

function Hit({hit}: HitProps) {
  return (
    <Text>
      <Highlight hit={hit} attribute="name" />
    </Text>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#252b33',
    // @ts-expect-error 100vh is valid but not recognized by react-native
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
});
