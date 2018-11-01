// import axios from "axios";
// import moment from "moment";
// import React, {Component} from 'react';
// import {Provider} from 'react-redux';
// import _ from 'lodash';
// import {createStore, applyMiddleware} from 'redux';
//
// class FetchNews extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             selectedUserLanguage: null,
//
//         };
//         this.articlesWrapper = document.getElementById("articlesWrapper");
//         this.googleAPIKey = "AIzaSyCmFJaQ8h01Yo8YDFNGmtIvko0sHWSSl8Y";
//         this.searchCategories = ["entertainment", "general", "health", "science", "sports", "technology"];
//         this.getTopHeadLinesByCountryAndCategory = this.getTopHeadLinesByCountryAndCategory.bind(this);
//         this.renderFetchedArticlesToPage = this.renderFetchedArticlesToPage.bind(this);
//         this.renderSecondaryHeader = this.renderSecondaryHeader.bind(this);
//         this.getBySearchTerm = this.getBySearchTerm.bind(this);
//         // this.guessedUserLanguage = window.navigator.language;
//         this.selectedUserLanguage = {};
//         this.indexOfDash = this.guessedUserLanguage.indexOf("-");
//         this.slicedUserLanguage = this.guessedUserLanguage.slice(0, this.indexOfDash);
//         this.availableLanguages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"];
//     }
//
//     appendAvailableLanguages() {
//         const FetchNewsApp = this;
//         let languagesUl = document.getElementById("setUserLanguageUl");
//         let languagesFragment = document.createDocumentFragment();
//
//         this.availableLanguages.forEach((lang) => {
//             let langLI = document.createElement("li");
//             langLI.className += "mdl-menu__item";
//             langLI.innerText = lang;
//             langLI.dataset.lang = lang;
//             languagesFragment.appendChild(langLI);
//             langLI.addEventListener("click", function () {
//                 FetchNewsApp.setUserLanguage(langLI.dataset.lang);
//             });
//         });
//         languagesUl.appendChild(languagesFragment);
//     }
//
//     updateUserLanguageTooltip(newLanguage) {
//         let tooltipWrapper = document.getElementById("userLanguageTooltip");
//         tooltipWrapper.innerText = newLanguage;
//     }
//
//     setUserLanguage(chosenLanguage) {
//         this.selectedUserLanguage = chosenLanguage;
//         this.updateUserLanguageTooltip(chosenLanguage);
//     }
//
//     static showSearchBar() {
//         return (searchTerm.style.display === "") ? searchTerm.classList.toggle("toggle-search") : searchTerm.style.display = "block";
//     }
//
//     getBySearchTerm(searchTerm) {
//         const FetchNewsApp = this;
//         axios({
//             method: 'get',
//             url: `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=c11eaa6f63524aaeb20ace88ae522539`
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let responseArticles = response.data.articles;
//                 let totalResponse = response.data.totalResults;
//                 let badgeElement = document.getElementById("searchResults");
//                 badgeElement.dataset.badge = totalResponse;
//                 FetchNewsApp.renderFetchedArticlesToPage(responseArticles);
//             });
//     }
//
//     getTopHeadlinesByCountry(countryCode) {
//         const FetchNewsApp = this;
//         axios({
//             method: 'get',
//             url: `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=c11eaa6f63524aaeb20ace88ae522539`
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let responseArticles = response.data.articles;
//                 if (response.data.totalResults > 0) {
//                     FetchNewsApp.renderFetchedArticlesToPage(responseArticles);
//                 }
//                 else {
//                     FetchNewsApp.loadDefaultHomePageFallback();
//                 }
//             });
//     }
//
//     getTopHeadlinesBySource(sourceCode) {
//         const FetchNewsApp = this;
//         axios({
//             method: 'get',
//             url: `https://newsapi.org/v2/top-headlines?sources=${sourceCode}&apiKey=c11eaa6f63524aaeb20ace88ae522539`
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let responseArticles = response.data.articles;
//                 FetchNewsApp.renderFetchedArticlesToPage(responseArticles);
//             });
//     }
//
//     getTopHeadLinesByCountryAndCategory(countryCode, categoryCode) {
//         const FetchNewsApp = this;
//         axios({
//             method: 'get',
//             url: `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=c11eaa6f63524aaeb20ace88ae522539`
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let responseArticles = response.data.articles;
//                 FetchNewsApp.renderFetchedArticlesToPage(responseArticles);
//             });
//     }
//
//     renderFetchedArticlesToPage(batchOfArticles) {
//         const FetchNewsApp = this;
//
//         while (this.articlesWrapper.firstChild) {
//             this.articlesWrapper.removeChild(this.articlesWrapper.firstChild);
//         }
//
//         batchOfArticles.forEach((eachArticle, indexInArray) => {
//             let {author, description, publishedAt, source, title, url, urlToImage} = eachArticle;
//             let formattedDate = moment(publishedAt).hours();
//             let newArticleWrapper = document.createElement("div");
//             newArticleWrapper.classList += "individual-article--wrapper";
//             let newArticle = `<img src="${urlToImage}">
//                                 <h3>${title}</h3>
//                                 <span class="mdl-chip">
//                                     <span class="mdl-chip__text">${author}</span>
//                                 </span>
//                                 <span class="mdl-chip">
//                                     <span class="mdl-chip__text">${source.name}</span>
//                                 </span>
//                                 <span class="mdl-chip mdl-chip--deletable">
//                                     <span class="mdl-chip__text">${formattedDate} hours ago</span>
//                                     <button type="button" class="mdl-chip__action"><i class="material-icons">timelapse</i></button>
//                                 </span>
//                                 <blockquote>${description}</blockquote>
//                                 <button onclick="goToArticle('${url}')">Click here to read the whole article</button>`;
//             newArticleWrapper.innerHTML = newArticle;
//             this.articlesWrapper.appendChild(newArticleWrapper);
//         });
//     }
//
//     goToArticle(url) {
//         window.location.href = url;
//     }
//
//     getUsersGeolocation() {
//         const FetchNewsApp = this;
//
//         let options = {
//             enableHighAccuracy: true,
//             timeout: 5000,
//             maximumAge: 0
//         };
//
//         function success(pos) {
//             let {latitude, longitude, accuracy} = pos.coords;
//
//             console.log('Your current position is:');
//             console.log(`Latitude : ${latitude}`);
//             console.log(`Longitude: ${longitude}`);
//             console.log(`More or less ${accuracy} meters.`);
//             FetchNewsApp.reverseGeolocateUserCity(latitude, longitude);
//         }
//
//         function error(err) {
//             console.warn(`ERROR(${err.code}): ${err.message}`);
//         }
//
//         navigator.geolocation.getCurrentPosition(success, error, options);
//     }
//
//     reverseGeolocateUserCity(userLat, userLong) {
//         const FetchNewsApp = this;
//
//         axios({
//             method: 'get',
//             url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLat},${userLong}&key=AIzaSyCmFJaQ8h01Yo8YDFNGmtIvko0sHWSSl8Y`
//         })
//             .then(function (response) {
//                 let responseResult = response.data.results[0];
//
//                 let countryCode = responseResult.address_components[5].short_name;
//
//                 FetchNewsApp.getTopHeadlinesByCountry(countryCode);
//             });
//     }
//
//     loadDefaultHomePage() {
//         this.getUsersGeolocation();
//         this.renderSecondaryHeader();
//         this.appendAvailableLanguages();
//         this.updateUserLanguageTooltip(this.slicedUserLanguage);
//     }
//
//     renderSecondaryHeader() {
//         const FetchNewsApp = this;
//
//         let secondaryHeader = document.getElementById("secondaryHeader");
//         let fragment = document.createDocumentFragment();
//         this.searchCategories.forEach((category, indexOfCat) => {
//             let secondaryHeaderLI = document.createElement("li");
//             secondaryHeaderLI.textContent = category;
//             secondaryHeaderLI.addEventListener("click", function onClickHeaderLI() {
//                 FetchNewsApp.getTopHeadLinesByCountryAndCategory(FetchNewsApp.selectedUserLanguage || FetchNewsApp.slicedUserLanguage, this.textContent);
//             });
//             fragment.appendChild(secondaryHeaderLI);
//         });
//         let secondaryHeaderUl = document.createElement("ul");
//         secondaryHeaderUl.appendChild(fragment);
//         secondaryHeader.appendChild(secondaryHeaderUl);
//     }
//
//     loadDefaultHomePageFallback() {
//         const FetchNewsApp = this;
//
//         axios({
//             method: 'get',
//             url: `https://newsapi.org/v2/top-headlines?language=${FetchNewsApp.slicedUserLanguage}&apiKey=c11eaa6f63524aaeb20ace88ae522539`
//         })
//             .then(function (response) {
//                 console.log(response);
//                 let responseArticles = response.data.articles;
//                 FetchNewsApp.renderFetchedArticlesToPage(responseArticles);
//             });
//     }
// }
