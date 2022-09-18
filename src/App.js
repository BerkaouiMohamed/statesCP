import React from 'react'
import logo from './logo.png'
import './App.css'
class App extends React.Component{
    constructor (){ 
        super()
        this.state={
            name:'Name',
            bio:'Bio',
            src:'Image',
            prof:'Proffision',
            test:false,
        }


        
        
    }
    clic =() => {
     
      this.setState({test:(!this.state.test)});
       this.setState({name:'Mohamed',bio:'tunisien',src:logo,prof:'devlopper'});
      
    }
    


      

    render(){
      

        return(
          console.log(this.state.test),

        <>
        <div className='page'>
        <div className='buttons'>
                <button className='button' onClick={()=>this.clic()  } style={{display: this.state.test ? 'block' : 'none'}} type="button">disappear Profile</button>
                <button className='button' onClick={()=>this.clic()  } style={{display: this.state.test ?  'none':'block'}} type="button">appear Profile</button>

                

            </div>
            <div className='profil'  style={{display: this.state.test ? 'none'  : 'block'}}>
            <p>Photo</p>
                <p >Name</p>
                <p>Bio</p>
                <p>Proffision</p>
                

            </div>
            <div className='profil'  style={{display: this.state.test ? 'block'  : 'none'}}>
              
                <img  src={this.state.src} alt="" style={{width:'50px '}}></img>
                <p >{this.state.name}</p>
                <p>{this.state.bio}</p>
                <p>{this.state.prof}</p>
                <p>{this.state.test}</p>

            </div>
           
            </div>
            </>
          
        );
    }
}



export default App;
