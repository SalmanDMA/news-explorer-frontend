import { useEffect, useState } from 'react';
import { useDataSearchContext } from '../context/DataSearchContext';
import { useUserContext } from '../context/DataUserContext';
import About from './About';
import NewsCardList from './Card/NewsCardList';
import Hero from './Hero';
import { createArticle, deleteArticle, getAllArticles } from '../utils/MyApi';

const Main = () => {
 const { dataHasilSearch } = useDataSearchContext();
 const { savedArticles, setSavedArticles } = useUserContext();

 useEffect(() => {
  const fetchData = async () => {
   try {
    const allArticles = await getAllArticles();
    setSavedArticles(allArticles);
   } catch (error) {
    console.error('Error fetching saved articles:', error);
   }
  };

  fetchData();
 }, []);


 const toggleSaveArticle = async (article) => {
  const {
   category = 'defaultCategory',
   description = 'lorem ipsum',
   publishedAt = new Date(),
   source: { name } = 'defaultSource',
   title = 'defaultTitle',
   url = 'https://default-url.com',
   urlToImage = 'https://default-image.jpg',
  } = article;

  try {
   const index = savedArticles.findIndex((savedArticle) => savedArticle.title === title);

   if (index === -1) {
    // Jika belum ada, tambahkan ke daftar simpanan
    const savedArticle = await createArticle({
     keyword: category,
     title,
     text: description,
     date: publishedAt,
     source: name,
     link: url,
     image: urlToImage,
    });
    // Update savedArticles dengan data terbaru dari database
    const updatedSavedArticles = [...savedArticles, savedArticle]; // Copy savedArticles
    console.log('updatedSavedArticles:', updatedSavedArticles);
    setSavedArticles(updatedSavedArticles);
   } else {
    // Jika sudah ada, hapus dari daftar simpanan
     await deleteArticle(savedArticles[index]._id);

    // Update savedArticles dengan data terbaru dari database
    const updatedSavedArticles = savedArticles.filter((article) => article._id !==  savedArticles[index]._id);
    console.log('updatedSavedArticles:', updatedSavedArticles);
    setSavedArticles(updatedSavedArticles); // Update state lokal
   }
  } catch (error) {
   console.error('Error saving article:', error);
  }
 };
 return (
  <>
   <Hero />
   {dataHasilSearch && <NewsCardList savedArticles={savedArticles} toggleSaveArticle={toggleSaveArticle} />}
   <About />
  </>
 );
};

export default Main;
