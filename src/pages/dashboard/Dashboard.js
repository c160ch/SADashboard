import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  Label,
  Badge
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import s from "./Dashboard.module.scss";
import { getDatabase,ref,set,get, child } from "firebase/database";
import { doc, collection, query, where, getDocs , getFirestore, orderBy, limit, startAt, getDoc} from "firebase/firestore";
import {db} from "../../actions/register.js";
import moreIcon from "../../assets/tables/moreIcon.svg";
import mock from "../tables/mock.js";
import a from "../tables/Tables.module.scss";

const Dashboard = () => {
//  const [checkboxes, setCheckboxes] = useState([true, false])

//  const toggleCheckbox = (id) => {
//    setCheckboxes(checkboxes => checkboxes
//      .map((checkbox, index) => index === id ? !checkbox : checkbox ))
//  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

//  const meals = [meal1, meal2, meal3];
  const pageSize = 4;
  const targetStartup = 1000;
  const targetFundingGoal = 100000000;

  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false); 
  const [secondTable] = useState(mock.secondTable);  
//  const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);
  const secondTablePagesCount = Math.ceil(30 / pageSize);

  const [startupData, setStartupData]=useState([]);
  
  const [noOfStartup, setNoOfStartup]=useState(0);
  
  const [fundingGoal, setFundingGoal]=useState(0);
  
  const[currentDataSize, setCurrentDataSize]=useState(0);
  
  const [fetchedData, setFetchedData]=useState([]);
  
  const [currentFirstDoc, setCurrentFirstDoc]=useState(null);
  
  const [currentLastDoc, setCurrentLastDoc]=useState(null);
  
  const loadSummary = async (index)=>{
     const docRef = doc(db, "Summary", "Overall");
     const docSnap = await getDoc(docRef);

     if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFundingGoal(docSnap.data().Amount);
        setNoOfStartup(docSnap.data().Customer);
     } else {
       // docSnap.data() will be undefined in this case
       console.log("No such document!");
     }
  
  }
  
  
   const  loadCalls= async (index)=>{
    console.log("incoming" ,index, pageSize);
    var calls = [];
    console.log("loading");
    const qq = query(collection(db, "calls"), orderBy("Time", "desc"),limit(pageSize+1));
//    var fg=0;
//    var noOfS=0;
	var fetched =[]
//			console.log("before select");
    await getDocs(qq).then(
    querySnapshot=>{
        querySnapshot.forEach((doc) => {
//			console.log(doc.id, " => ", doc.data());
        calls = [...calls, doc.data()];
//			console.log("inside loop->",calls);
//        setStartupData(calls);
//        fg=fg+Number(doc.data().amount);
//        noOfS= noOfS+1;
//			console.log("Startup data->",noOfS);
//			console.log(" before set funding goal >>", fg,"noOfStartup-->",noOfS);
//        setFundingGoal(fg);
//        setNoOfStartup(noOfS);
//			console.log("before set funding goal >>", fundingGoal+Number(doc.data().amount),"noOfStartup-->",noOfStartup+1);
//			console.log("funding goal >>", fundingGoal,"noOfStartup-->",noOfStartup);
        const dd = doc.data();
//			console.log("customer==>",dd.Customer);
        fetched = [...fetched, doc];
        });
    }
    );
//			console.log("before return=>",calls);
        setStartupData(calls);
 //       setFundingGoal(fg);
 //       setNoOfStartup(noOfS);
		if(fetched.length >0){
			setCurrentFirstDoc(fetched[0]);
			setCurrentLastDoc(fetched[fetched.length-1]);
			setFetchedData(fetchedData=>[...fetchedData, fetched]); 
		}	
		 

    return calls;
};
    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    }

  const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
  }
	
  const setSecondTablePage = (e, index,preIndex) => {
    e.preventDefault();
    setSecondTableCurrentPage(index);
	
	console.log("currentPage", index, preIndex);
	
	if(index > preIndex){
		// adding page
		console.log("loading new data if fetchedData doesnt have");
		
		if(fetchedData.length >= index*pageSize){
			// read from fetchedData
			let content = [];
			console.log(" loading from fetchedData");
			content=[...content, fetchedData.slice((index-1)*pageSize,(index)*pageSize)];
		}else{
			// loading from DB
			console.log("loading from DB");
		}
	}else{
		// lesser page
		if(index*pageSize<=fetchedData.length+1){
			let content = [];
			let member=0;
			for (let i = (index-1)*pageSize; i < index*4; i++) {
				
				content=[...content, fetchedData[i].doc];
				console.log("looping -->",i, content[member]);
            }
			setStartupData(content);
		}else{
			// something wrong . needs to reload
			console.log("Warning should not happen ", index*pageSize, fetchedData.length+1);
			
		}
		
		
	}
	
  }
  
  const againSet=()=>{
	  console.log("Force update");
	  setStartupData([...startupData, {Customer:`0163794212`}]);
  }
  
  useEffect(() => {
	  console.log("load once");
//    loadCalls(1);
	  loadSummary(1);
  }, []);
  
  
  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={12}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12} md={12}>
              <Widget>
                <div className={a.tableTitle}>
                  <div className="headline-2">Startup Information</div>
                </div>
                <div className="widget-table-overflow">
                  <Table className="table-striped table-borderless table-hover" responsive>
                    <thead>
                    <tr>
                      <th>
                        <div className="checkbox checkbox-primary">
                          <input
                            id="checkbox200"
                            className="styled"
                            type="checkbox"
							disabled
                          />
                          <label for="checkbox200"/>
                        </div>
                      </th>
                      <th className={a.nameCol}>Startup</th>
                      <th>Date Registered</th>
                      <th>Startup title</th>
                      <th>Description</th>
                      <th>Selling Points</th>
                      <th>Marketing Strategies</th>
                      <th>Funding Goal</th>
					  <th>Additional Points</th>
					  <th>Startup Summary</th>
					  <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {startupData
                      .slice(
                        secondTableCurrentPage * pageSize,
                        (secondTableCurrentPage + 1) * pageSize
                      )
                      .map(item => (
                      <tr key={uuidv4()}>
                        <td>
                          <div className="checkbox checkbox-primary">
                            <input
                              id={item.Customer}
                              className="styled"
                              type="checkbox"
                            />
                            <label for={item.Customer} />
                          </div>
                        </td>
						<td>{item.Customer}</td>
                        <td>{item.Time.toDate().toLocaleDateString("en-GB")}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.points}</td>
                        <td>{item.strategies}</td>
                        <td>{item.amount}</td>
						<td>{item.additional}</td>
						<td>{item.Summary}</td>
                        <td></td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                  <Pagination className="pagination-with-border">
                    <PaginationItem disabled={secondTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setSecondTablePage(e, secondTableCurrentPage - 1, secondTableCurrentPage)}
                        previous
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(1)].map((page, i) =>
                      <PaginationItem active key={i}>
                        <PaginationLink disabled >
                          {secondTableCurrentPage+1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={secondTableCurrentPage >= 4 - 1}>
                      <PaginationLink
                        onClick={e => setSecondTablePage(e, secondTableCurrentPage + 1, secondTableCurrentPage)}
                        next
                        href="#top"
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Widget>            </Col>
          </Row>
          <Row className="gutter">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={6}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartRed} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Total Startup</p>
                      <p className="body-2">{noOfStartup}<span className="body-3 muted">/ {targetStartup}</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-red" className={`progress-xs ${s.mutedPink}`} value={noOfStartup/targetStartup*100} />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={6}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartYellow} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Funding Target</p>
                      <p className="body-2">{fundingGoal}<span className="body-3 muted">/{targetFundingGoal}</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-yellow" className={`progress-xs ${s.mutedYellow}`} value={fundingGoal/targetFundingGoal*100} />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
       </Row>
    </div>
  )
}

export default Dashboard;
