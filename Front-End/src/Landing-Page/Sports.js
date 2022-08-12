import axios from "axios";
import NewsBlock from './Technology'
import React from "react";
import  Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const cardColors = ["#FEFBF6","#A6D1E6","#7F5283","#C7D36F","#FFB4B4","#B67171"];
const arrlen=6;

function Sports(){

   let colIndex=0;

   const [newsData,setNewsData]=React.useState(null);

   const getNewsBlocks = async()=>{
      console.log("Inside block");
      var news = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`);
      if(news.status==200){
         setNewsData(news.data);
         console.log(newsData);
      }       
          
   }
   React.useEffect(()=>{
     getNewsBlocks();
   },[]);
   
   return (
      <div style={{paddingTop:"200px"}}>
      <Container>
      <Row>
         {newsData!==null?<>
       {newsData.articles.map((news,index)=>{
          return (
            <Card className="m-4" key={index} style={{ border:"3px solid black",width: "18rem" , backgroundColor: cardColors[(colIndex++)%arrlen]}}>
                  <SportsBlock block={news} />
            </Card>        
          ); 
       })}</>:<></>}
      </Row>
   </Container>
      </div>

     );
}

function SportsBlock(props){
   return(
      <div>
      <Card.Body >
         <Card.Img variant="top" src={props.block.urlToImage} style={{border:"2px solid black"}}/>
          <Card.Title style={{color:"solid-black"}}>{props.block.title}</Card.Title>
          <Card.Text>{props.block.content}</Card.Text>
          <Button variant="dark" onClick={()=>{
            window.open(props.block.url);
          }}>read more...</Button>
      </Card.Body>
    </div>
   );
}

export default Sports;