import Inferno from 'inferno';
import Component from 'inferno-component';

class Header extends Component {
  componentWillMount() {
    function Menus(props) {
      const showMenus = props.showMenus;
      if (showMenus) {
        return (
          <div id="flow-compass" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <Dropdown/>
            </ul>
          </div>
        );
      }
      return (
        <div></div>
      );
    }
  }
  render() {
    return (
      <div className="flow-box-header"> 
        <nav role="navigation" className="navbar navbar-default">
          <div className="container-fluid">
            <div data-bind="template: { name:'flow-navbar', data:$data }" className="flow-navbar">
              <div className="navbar-header">
                <button 
                  type="button"
                  data-toggle="collapse"
                  data-target="#flow-compass"
                  className="navbar-toggle collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <span className="navbar-brand flow-logo"></span>
              </div>

            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="flow-titlebar">
            {/*<!-- ko if:isEditingName-->*/}
            <div>
              <input type="text" data-bind="value:name, valueUpdate:'afterkeydown', enterKey:saveName">
                <i data-bind="click:saveName" className="fa fa-check flow-pointer"></i>
              </input>
            </div>
            {/*<!-- /ko-->*/}
            {/*<!-- ko ifnot:isEditingName-->*/}
            <div data-bind="click:editName" title="Edit notebook name..." className="flow-pointer">
              <span data-bind="text:name"></span>
              <i className="fa fa-pencil"></i>
            </div>
            {/*<!-- /ko-->*/}
          </div>
          <div data-bind="template: { name:'flow-toolbar', data:toolbar }" style="margin-bottom:10px" className="flow-toolbar"></div>
        </div>
      </div>
    );
  }
}

export default Header;
