import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResult';

export const BASE_URL = "https://foodyzone-3.onrender.com";

const App = () => {

  // states
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilterData] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoding(true);

      try {
        const response = await fetch(BASE_URL);
           console.log(response);
        const json = await response.json();
         console.log(json);
        setData(json);
        setFilterData(json);
        

      } catch (error) {
        setError("Server not responding");
        setLoding(false);
      }finally {

      setLoding(false);

    }
    };

    fetchFoodData();

  }, []);

  // search function
  const searchFood = (e) => {

    const searchValue = e.target.value.toLowerCase();

    if (searchValue === "") {
      setFilterData(data);
      return;
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );

    setFilterData(filter);
  };

  // filter function
  const filterFood = (type) => {

    setSelectedBtn(type);

    if (type === "all") {
      setFilterData(data);
      return;
    }

    const filter = data.filter((food) =>
      food.type.toLowerCase().includes(type)
    );

    setFilterData(filter);
  };

  const filterBtns = [
    { name: "ALL", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" }
  ];

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading....</div>;

  return (

    <MainContainer>

      <TopContainer>

        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input
            onChange={searchFood}
            type="text"
            placeholder='Search Food'
          />
        </div>

      </TopContainer>

      <FilterContainer>

        {
          filterBtns.map((value) => (

            <button
              key={value.name}
              onClick={() => filterFood(value.type)}
              className={`button ${selectedBtn === value.type ? "active" : ""}`}
            >
              {value.name}
            </button>

          ))
        }

      </FilterContainer>

      <SearchResult data={filteredData} />

    </MainContainer>
  )
};

export default App;


// styles

const MainContainer = styled.div`
  background-color: #323334;
  min-height:100vh;
`

const TopContainer = styled.div`

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:40px 120px;

  input{
    width:285px;
    height:40px;
    background-color:#323334;
    border:1px solid #FF0909;
    border-radius:10px;
    color:white;
    padding:0 10px;
  }

  @media (max-width:600px){

    flex-direction:column;
    gap:20px;

  }

`

const FilterContainer = styled.div`

  display:flex;
  justify-content:center;
  gap:12px;
  padding-bottom:40px;

  .button{

    background-color:#FF0909;
    color:white;
    border:none;
    padding:6px 14px;
    border-radius:7px;
    cursor:pointer;
    transition:0.3s;

  }

  .button:hover{

    background-color:#ff4343;

  }

  .active{

    background-color:#ff4343;

  }

`