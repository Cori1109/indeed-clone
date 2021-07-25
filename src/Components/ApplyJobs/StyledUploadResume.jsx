import styled from 'styled-components'


const UploadResume = styled.div`
    width: 56%;
    margin: auto;
   *{
       margin:0;
       padding:0;
   }
    div:first-child{
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 50px 0 10px;
        padding:0;
    }
    div:nth-child(2){
        display:flex;
        align-items: center;
    }
    div:nth-child(2)>:first-child{
        cursor:pointer;
        width: 40px;
        height:20px;
        margin-right: 8px;
        padding:5px;
    }
    div:nth-child(2)>:first-child:hover{
        background: rgb(238, 241, 254);
        border-radius:5px;
    }

    h4{
        margin: 19px 0;
    }

    div:nth-child(5){
        display:flex;
        align-items: center;
        cursor:pointer;
        border: 1px solid rgb(22, 64, 129);
        padding: 12px;
        border-radius:8px;
        margin-top:25px;
    }
    div:nth-child(5)>:first-child{
        width: 25px;
        height:25px;
        color: grey;
        margin-right: 8px;
        padding:5px;
    }
    div:nth-child(5)>:nth-child(3){
        width: 20px;
        height: 20px;
        color: white;
        background: rgb(22, 64, 129);
        border-radius: 50%;
        margin-left: 175px;
    }
    & section>h4{
        color: rgb(22, 64, 129);
    }
    & section>p{
        font-size:14px;
    }

    div:nth-child(6){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }
    div:nth-child(6)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 40px ;
        cursor: pointer;
    }
    div:nth-child(6)>button{
        width: 125px;
        background: rgb(22, 64, 129);
        padding:13px;
        font-weight: bold;
        font-size:15px;
        border-radius:5px;
        margin-left:20px;
        border: none;
        color: white;
        cursor: pointer;
    }
    
    & p{
        text-align:center;
    }
    p>span{
        color:rgb(22, 64, 129);
    }

`
export default UploadResume