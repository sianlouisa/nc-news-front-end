import React, { Component } from 'react';
import '../App.css';
import Appbar from 'muicss/lib/react/appbar';
import { Link } from '@reach/router';
import Topics from './Topics';
import Button from 'muicss/lib/react/button';

class NavBar extends Component {
  render() {
    const { topics } = this.props;
    let s1 = { verticalAlign: 'middle' };
    let s2 = { textAlign: 'middle' };
    return (
      <>
        <div className="nav">
          <Appbar>
            <table width="100%">
              <tbody>
                <tr style={s1}>
                  <td className="mui--appbar-height">
                    <Button>
                      <Link to="/post/topic">Post Topic</Link>
                    </Button>
                    <Button>
                      <Link to="/post/article">Post Article</Link>
                    </Button>
                  </td>
                  <td className="mui--appbar-height" style={s2}>
                    <Topics topics={topics} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Appbar>
        </div>
      </>
    );
  }
}

export default NavBar;
