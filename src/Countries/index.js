import {Component} from 'react'
import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const CountriesList = initialCountriesList.filter(
  each => each.isVisited === true,
)

console.log(CountriesList)

class Countries extends Component {
  state = {CList: CountriesList, hlo: initialCountriesList}

  Remove = id => {
    const {CList} = this.state
    const UpList = CList.filter(each => each.id !== id)
    this.setState({CList: UpList})
  }

  Visit = id => {
    this.setState(prevState => ({
      CList: [...prevState.CList, prevState.hlo.find(each => each.id === id)],
    }))
  }

  Vis = id => {
    const {CList} = this.state
    const there = CList.find(each => each.id === id)
    if (there) {
      return 'Visited'
    }
    return 'Visit'
  }

  render() {
    const {CList} = this.state
    const IsCountriesThere = CList.length !== 0
    return (
      <div>
        <div className="maindiv">
          <h1 className="c">Countries</h1>
          <div className="cou">
            <ul className="ul">
              {initialCountriesList.map(each => (
                <li key={each.id}>
                  <div className="lii">
                    <p className="p">{each.name}</p>
                    <button
                      className={`${
                        this.Vis(each.id) === `Visited` ? 'Visited' : 'but'
                      }`}
                      type="button"
                      onClick={() => this.Visit(each.id)}
                    >
                      {this.Vis(each.id) === 'Visited' ? (
                        <p>Visited</p>
                      ) : (
                        <p>Visit</p>
                      )}
                    </button>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
          <h1 className="c">Visited Countries</h1>
          {IsCountriesThere ? (
            <div>
              <ul className="ul hlo">
                {CList.map(each => (
                  <li key={each.id} className="l">
                    <img src={each.imageUrl} alt="thumbnail" className="i" />
                    <div className="dd">
                      <p className="c">{each.name}</p>
                      <button
                        className="but1"
                        type="button"
                        onClick={() => this.Remove(each.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p className="c">No Countries Visited Yet!</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Countries
