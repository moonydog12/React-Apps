# Image search app

## Key points

**Handling text inputs**

- Manage the text in the input using the state system
- Need to know what the search term is
- Need to change the search term
- Inputs managed in this style are called **controlled inputs**

```js
// SearchBar.jsx
const SearchBar = ({ onSubmit }) => {
  // Manage the text in the input
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    // Set the search term to the `term` state
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      {/*Call handler when submit the form*/}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};
```

**Component Communication**

```js
const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  // Pass down the event handler to child element
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};
```

- Communication from child up to parent
- Treat it like a normal event
- Pass an event handler down
- Call handler when something interesting happen

**Requirements for keys**

```js
const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
};
```

- Use whenever we have a **list** of elements
- Add the key to the top-most JSX element in the list
- Must be a string or number
- Should be unique for this list
- Should be consistent across rerenders
