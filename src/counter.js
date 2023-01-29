import React from "react"
class Counter extends React.Component{
   
    state={
        count:0
    }
    constructor()
    {
        super();
     
        // this.state={count:0}
        // this.plus = () =>{
        //     this.setState({count:this.state.count+1})
        // }
        this.sub = () =>{
            if(this.state.count>0)
            {
                this.setState({count:this.state.count-1})
            }
        }
    }
    render()
    {   
        
        const plus = () =>
        {
            this.setState({count:this.state.count+1})
            // alert()

        }
        return(
            <>

            <h1>{this.state.count}</h1>
            <input type="button"  value='+' onClick={() => plus()}/>
            <button value='-' onClick={() => this.sub()}>-</button>

            {/* <input type="button"  value='-' /> */}

            </>
        )
    }
}
export default Counter