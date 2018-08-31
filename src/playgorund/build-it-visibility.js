//Toggle visibility by state object
class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      visible: false
    }
  }
  toggleDetails(){
    this.setState((prevState) =>{
      return {
        visible: !prevState.visible
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetails}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visible && (
          <div>
            <p>The button above will toggle details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


//Toggle app without using state object
// let visible = true;
// const toggleDetails = (e)=>{
//   visible = !visible;
//   renderToggleApp();
// }
// const app = document.getElementById('app');
// const renderToggleApp = () =>{
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {visible ? 'Hide details' : 'Show details'}
//       </button>
//       {visible && (
//         <div>
//           <p>The button above will toggle details</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, app)
// };
//
// renderToggleApp();
