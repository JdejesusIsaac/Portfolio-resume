
import SaveEth from '../assets/sendeth.png'
import weather from '../assets/Weather.png';
import AMM from '../assets/Amm.png'
import Tokenexplorer from '../assets/tokenExpl.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Send ETH App/Erc20Token-Explorer</h3>
                    <img src={Tokenexplorer} alt="Send Eth Page" />
                    <p>Every valid public address can receive an ERC20 token/coin. That's really powerful because your smart contracts can receive and hold coins as well. Dapp can transfer any ERC20 token that your contract received. Can also view Erc20 Symbol and Totalsupply. Read data from smart contracts using ethers.js. Run contract function from React.js app 
                    </p>

                    <a href="https://jdejesusisaac.github.io/TokenExplorerApp/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/JdejesusIsaac/TokenExplorerApp/tree/master" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Graphql-WeatherApp</h3>
                    <img src={weather} alt="Compound Landing Page" />
                    <p>The Weather App:

An Apollo GraphQL application that exposes weather data.

Able to retrieve weather by city.

  Project Stack:



GraphQL, Apollo-Client,

ReactJS,

ChakraUI
                    </p>

                    <a href="https://weather-graphql-app.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/JdejesusIsaac/WeatherGraphql-App" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Automatic-Market-Maker Dapp</h3>
                    <img src={AMM} alt="Aave Landing Page" />
                    <p>Basic AMM having features namely Provide, Withdraw & Swap with no incentive mechanism like trading fees. Also, we will not deal with ERC20 tokens instead, maintained by mapping storing the balance of the accounts to keep things simple! Smart contract written in Solidity, deployed to Mumbai-Polygon Testnet. Frontend of the application with the help of ReactJS
                    </p>

                    <a href="https://jdejesusisaac.github.io/auto-mm/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/JdejesusIsaac/auto-mm/tree/master/src" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;