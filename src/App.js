import "./styles.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Content from "./components/content_components/Content";
import Bookmarks from "./components/content_components/Bookmarks";

export default function App() {
  const [photos, setPhotos] = React.useState({});
  const [searchText, setSearchText] = React.useState({
    text: "",
    page: 1
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!searchText.text) {
      return;
    } else {
      setLoading(true);
      fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=52c041addcdf65c0d1401924597a7000&text=${searchText.text}&per_page=10&page=${searchText.page}&format=json&nojsoncallback=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data.photos);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching and parsing data", error);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Header />
      <div className="mainBox">
        <Menu />
        <Route
          exact
          path="/"
          render={(props) => (
            <Content
              {...props}
              photos={photos}
              setSearchText={setSearchText}
              loading={loading}
              searchText={searchText}
            />
          )}
        />
        <Route exact path="/bookmarks" component={Bookmarks} />
      </div>
      <Footer />
    </div>
  );
}
