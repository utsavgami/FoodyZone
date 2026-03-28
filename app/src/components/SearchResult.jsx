
import styled from 'styled-components'
import { BASE_URL } from '../App'

const SearchResult = ({ data }) => {

  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
          {
            data?.map(({ name, image, text, price }) => (
              <FoodCard key={name}>
                <div className="food_image">
                  <img src={BASE_URL + image} alt="food image" />
                </div>
                <div className="food_info">
                  <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                  <Button>{price.toFixed(2)}</Button>
                </div>

              </FoodCard>
            ))
          }
        </FoodCards>
      </FoodCardContainer>

    </div>
  )
}

export default SearchResult

const FoodCardContainer = styled.div`

  background-image:url("/bg.png");

  background-size:cover;

  background-position:center;

  min-height:calc(100vh - 180px);

  display:flex;

  justify-content:center;

  padding-bottom:40px;

`


const FoodCards = styled.div`

  max-width:1200px;

  width:100%;

  margin:auto;

  display:grid;

  grid-template-columns:repeat(2,1fr);

  gap:25px;

  padding:40px 20px;

  @media (max-width:768px){

    grid-template-columns:1fr;

  }

`;


const FoodCard = styled.div`

  width:100%;

  height:170px;

  border-radius:20px;

  display:flex;

  gap:15px;

  align-items:center;

  padding:15px;

  backdrop-filter:blur(10px);

  background:rgba(255,255,255,0.08);

  border:1px solid rgba(255,255,255,0.2);

  transition:0.3s;

  &:hover{

    transform:scale(1.03);

    border:1px solid rgba(255,255,255,0.4);

  }


  .food_info{

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    width:100%;

    height:100%;

  }


  .info h3{

    margin:0;

    font-size:18px;

    color:white;

  }

  .info p{

    margin-top:5px;

    font-size:13px;

    color:#d9d9d9;

  }


.food_image img{

  width:90px;

  height:90px;

  border-radius:50%;

  object-fit:cover;

  border:3px solid rgba(255,255,255,0.3);

}

`


const Button = styled.button`

  background:#FF0909;

  color:white;

  border:none;

  padding:6px 14px;

  border-radius:8px;

  cursor:pointer;

  font-weight:600;

  align-self:flex-end;

  transition:0.3s;

  &:hover{

    background:#ff4343;

  }

`