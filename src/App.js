import StateState from "./context/StateContext/StateState"
import  DetailsState from "./context/DetailsContext/DetailsState"
import DrugState from "./context/DrugsContext/DrugsState"
import ProteinState from "./context/ProteinContext/ProteinState"
import GeneState from "./context/GeneContext/GeneState"
import BioModelState from "./context/BioModelContext/BioModelState"

import StateWiseCases from "./Components/StateWise/StateWiseCases"
import GetAllDrugs from './Components/Drugs/GetAllDrugs/GetAllDrugs';
import GetAllProteins from './Components/Protein/GetAllProtein/GetAllProtein';
import GetBioModel from "./Components/BioModel/GetBiomodel/GetBiomodel";
import AddProteins from "./Components/Protein/AddProtein/AddProteins"
import Visualize from "./Components/DetailsWise/Visualize"
import GetGenes from "./Components/Gene/GetGenes"

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/UI/Homepage';
import Scientist from './Components/UI/Scientist';
import Layman from './Components/UI/Layman';
import AllDetails from "./Components/DetailsWise/AllDetails"


const App = () => {
	return (
		<StateState>
			<DetailsState>
				<DrugState>
					<ProteinState>
						<GeneState>
							<BioModelState>
								<BrowserRouter>
								<Switch>
									<Route exact path='/' component={Homepage} />
									<Route exact path='/scientist' component={Scientist} />
									<Route exact path='/layman' component={Layman} />
									<Route
										exact
										path='/layman/statewisedetails'
										component={StateWiseCases}
									/>
									<Route
										exact
										path='/layman/statewisecasedetails/:id'
										component={Visualize}
									/>
									<Route exact path='/layman/statewisecasedetails' component={AllDetails}/>
									<Route exact path='/scientist/getalldrugs' component={GetAllDrugs} />
									<Route
										exact
										path='/scientist/getallproteins'
										component={GetAllProteins}
									/>
									<Route exact path='/scientist/addprotein' component={AddProteins}/>
									<Route exact path='/scientist/getbiomodel' component={GetBioModel}/>
									<Route exact path='/scientist/gene' component={GetGenes}/>
								</Switch>
							</BrowserRouter>
							</BioModelState>
						</GeneState>
					</ProteinState>
				</DrugState>
			</DetailsState>
		</StateState>
	);
};

export default App;
