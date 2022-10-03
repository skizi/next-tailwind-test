import { useEffect, useState, useCallback } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Thumbnail } from '../components/atoms/thumbnail';
import { listEvents } from '../store/events';
import { useAppDispatch } from '../store';
import { useSelector, shallowEqual } from 'react-redux';
import { eventsSelector } from '../store/events';
import { LatLngToTemp } from '../components/molecules/lat-lng-to-temp';
import { Section } from '../components/atoms/section';
import { PostEvents } from '../components/molecules/post-events';
import { PostEvents2 } from '../components/molecules/post-events2';
import { ThumbnailList } from '../components/molecules/thumbnail-list';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let unmounted = false;
    (async () => {
      await dispatch(listEvents());

      const movies = await axios.get('https://reactnative.dev/movies.json', {
        params: { hoge: 'yamada' },
      });
      if (!unmounted) setMovies(movies.data.movies);
    })();

    return () => {
      unmounted = true;
    };
  }, [dispatch]);
  const events = useSelector(eventsSelector, shallowEqual);

  const handleSubmit = useCallback(async (value) => {
    if (value === '') return;
    const response = await axios
      .get('https://api.zipaddress.net/', {
        params: { zipcode: value },
      })
      .catch((error) => {
        console.log(error);
      });

    return response.data.data.address;
  }, []);

  return (
    <>
      <section>
        <h3>緯度経度から温度を取得するh3</h3>
        <LatLngToTemp />
      </section>
      <hr />
      <section>
        <h3>reduxを通してapiを叩くテスト</h3>
        <ThumbnailList thumbnails={Object.values(events)} />
      </section>
      <hr />
      <section>
        <h3>直接apiを叩くテスト</h3>
        <ThumbnailList thumbnails={movies} />
      </section>
      <hr />
      <section>
        <h3>POSTテスト</h3>
        <PostEvents handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h3>郵便番号から住所をGETするテスト</h3>
        <PostEvents2 handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default Home;
