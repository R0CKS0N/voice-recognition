import SpesschTT from './contener/SpesschTT';
import TextTS from './contener/TextTS';
import './App.css'

function App() {
  return (
    <body>
      <div  className="container">
        <div class="row">
          <div class="col-5">
            <SpesschTT/>
          </div>
          <div class="col-1">
          </div>
          <div class="col-6">
            <TextTS/>
          </div>
        </div>
      </div>
    </body>
  );
}
        
export default App;
