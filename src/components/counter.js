import React,{Component} from "react"
class counter extends Component{
constructor(props){
    super(props);
    this.state={count:0};
    }
    render(){
        const incrementCount=()=>{
            const curr=this.state.count;
            this.setState({count:1+curr});
        }
        return(
            <>
            <p>Button clicked {this.state.count} times</p>
            <button onClick={incrementCount}>Click me</button>
            </>
        )
    }
}
export default counter;