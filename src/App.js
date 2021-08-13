import './App.css';
import react, { useState, useEffect } from "react"

function App() {
  const [list, setList] = useState([])
  const [nrPages, setNrPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setList(data)
        const total = Math.ceil(data.length / 10)
        setNrPages(total)

      })
  }, [currentPage])
  const pagesList = []
  for (let i = 1; i <= nrPages; i++)
    pagesList.push(i)
  return (
    <div className="App">
      <p>hello</p>
      {list.map(function (item) {
        return (
          <div>
            <p>{item.id}</p>
            <img src={item.image_link}></img>
          </div>
        )
      })}
      {pagesList.map(function (page) {
        return (
          <button
            onClick={() => setCurrentPage(page)}>{page}</button>

        )
      })}

    </div>
  );
}

export default App;
