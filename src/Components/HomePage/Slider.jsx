import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FlightIcon from '@material-ui/icons/Flight';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './Slider.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import PersonIcon from '@material-ui/icons/Person';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MaterialUIPickers from './DatePicker';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import RestoreIcon from '@material-ui/icons/Restore';
import DateFnsUtils from "@date-io/date-fns";
// import { useHistory } from 'react-router-dom';
import axios from "axios";
import { v4 as uuid } from "uuid";
import SwapHorizSharpIcon from '@material-ui/icons/SwapHorizSharp';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: "0.5rem"
    },
    header: {
        borderRadius: "0.5rem 0.5rem 0px 0px",
        boxShadow: "0px 2px 0px -1px rgb(0 0 0 / 20%)",
        background: "white",
        paddingTop: "15px",
    }
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [openLocationSearch, setOpenLocationSearch] = React.useState("none");
    const [goingToVal, setGoingToVal] = React.useState("");
    const searchRef = useRef();
    const [AdultsTrevelers, setAdultsTrevelers] = React.useState(1);
    const [trevelersRoomCnt, setTrevelersRoomCnt] = React.useState(1);
    const [childrenCnt, setChildrenCnt] = React.useState(0);
    const [trevelersPopupOpen, setTrevelersPopupOpen] = React.useState("none");
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    // const history = useHistory();
    const [query, setQuery] = useState("");
    const [searchQueryResult, setSearchQueryResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [flightLeavingVal, setFlightLeavingVal] = useState("");
    const [flightLeavingSearchPopup, setFlightLeavingSearchPopup] = useState("none");
    const navigate = useNavigate();


    useEffect(() => {
        if (isSearching || query === "") {
            return;
        }
        handleSearchByQuery();
        // eslint-disable-next-line
    }, [query])

    const handleSearchByQuery = () => {
        setIsSearching(false);

        // axios.get(`https://my-api-data.herokuapp.com/places?q=${query}&_limit=50`).then((res) => {
        axios.get(`https://travelocity.onrender.com/hotel?q=${query}&_limit=50`).then((res) => {
            setSearchQueryResult(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsSearching(false);
        })
    }


    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSwap = () => {
        setGoingToVal(flightLeavingVal);
        setFlightLeavingVal(goingToVal);
    }

    const handleOpenLocation = (e) => {
        e.stopPropagation();
        setOpenLocationSearch("inline");
        searchRef.current.focus();
    }

    const handleCloseLocation = (data, e) => {
        e.stopPropagation();
        setOpenLocationSearch("none");
        setGoingToVal(data);
    }

    const handleFlightLeavingOpenSearchPopup = (e) => {
        e.stopPropagation();
        setFlightLeavingSearchPopup("inline");
        searchRef.current.focus();
    }

    const handleFlightLeavingCloseSearchPopup = (data, e) => {
        e.stopPropagation();
        setFlightLeavingSearchPopup("none");
        setFlightLeavingVal(data);
    }
    const handleHotelSearch = () => {

        if (goingToVal === "Goa") {
            navigate("/hotels")
        } else if(goingToVal === "Delhi"){
            navigate("/carlist");
        }else{
            alert("Kindly Select Available Point !")
        }
        const obj = {
            goingToVal: goingToVal,
            startDate: startDate,
            endDate: endDate,
            trevelersRoomCnt: trevelersRoomCnt,
        }
        // console.log(obj)
        localStorage.setItem('inputsData', JSON.stringify(obj));
        // navigate("/hotels");
    }

    const handleAdulTrevelersCnt = (e, val) => {
        e.stopPropagation();
        if ((val === -1 && AdultsTrevelers === 1) || (val === 1 && AdultsTrevelers === 20)) {
            return;
        }

        setAdultsTrevelers(prev => {
            const reqRoom = Math.ceil((prev + val) / 4);
            if (reqRoom > trevelersRoomCnt) {
                setTrevelersRoomCnt(reqRoom);
            }
            return prev + val;
        });
    }

    const handleAdulTrevelersRoomCnt = (e, val) => {
        e.stopPropagation();
        if ((val === -1 && trevelersRoomCnt === 1) || (val === 1 && trevelersRoomCnt === 5)) {
            return;
        }

        setTrevelersRoomCnt(trevelersRoomCnt + val);
    }

    const handleChildrenCnt = (e, val) => {
        e.stopPropagation();
        if ((val === -1 && childrenCnt === 0)) {
            return;
        }

        setChildrenCnt(childrenCnt + val);
    }

    const handleStartDate = (date) => {
        if (date === undefined) {
            return;
        }
        setStartDate(date);
        setEndDate(date);
    }

    const handleEndDate = (date) => {
        if (date === undefined) {
            return;
        }
        setEndDate(date);
    }

    const sort_year = (year) => {
        let temp = "" + year.getFullYear();
        return temp.slice(2);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.header}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Stays" icon={<ApartmentIcon style={{ color: '#505c66', width: "25px" }} />} {...a11yProps(0)} />
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Flights" icon={<FlightIcon style={{ color: '#505c66', width: "25px" }} />} {...a11yProps(1)} />
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Cars" icon={<DriveEtaIcon style={{ color: '#505c66', width: "25px" }} />} {...a11yProps(2)} />
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Packages" icon={<svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#505c66" d="M21.59 11.59h-2.36V8.66c0-.23-.2-.41-.43-.41h-5.82a.42.42 0 00-.43.41v2.93H10.2a.42.42 0 00-.43.41v8.34c0 .23.21.41.43.41h11.4c.21 0 .41-.2.41-.41V12c0-.23-.2-.41-.41-.41zm-7.36-1.68h3.32v1.68h-3.32V9.91zm3.79 9.06l-1.2-1.17 2.37-2.36 1.17 1.17-2.34 2.36zM10.89 4.91V3.66a.4.4 0 00-.41-.41H4.64a.4.4 0 00-.41.41v2.93H2.4A.4.4 0 002 7v13.34c0 .2.18.41.41.41h5.7V10.34c0-.23.18-.43.41-.43h2.37v-5zM9.23 6.59H5.89V4.91h3.34v1.68z"></path></svg></svg>} {...a11yProps(3)} />
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Things to do" icon={<svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><svg><path fill="#505c66" d="M22 10.18V6H2v4.18c.9 0 1.66.75 1.66 1.66 0 .9-.76 1.66-1.66 1.66v4.18h20V13.5c-.9 0-1.66-.76-1.66-1.66 0-.9.76-1.66 1.66-1.66zm-4.16 4.57c0 .23-.2.43-.43.43H6.59a.43.43 0 01-.43-.43V8.93c0-.23.2-.43.43-.43h10.82c.23 0 .43.2.43.43v5.82zm-10-4.57h8.32v3.32H7.84v-3.32z"></path></svg></svg>} {...a11yProps(4)} />
                    <Tab style={{ textTransform: 'none', width: `${100 / 6}%` }} label="Cruises" icon={<svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path path fill="#505c66" d="M20.34 10.96v1.68c0 .13-.06.24-.14.32-2.21 1.99-3.51 4.72-4.58 7.45-.24.62-.4 1.05-.48 1.3a.4.4 0 01-.39.29h-5.5a.4.4 0 01-.4-.3c-.07-.24-.23-.67-.47-1.3-1.06-2.7-2.4-5.47-4.58-7.44a.44.44 0 01-.14-.32v-1.68c0-.18.11-.33.3-.4l6.5-2.17c.23-.05.54.08.54.35L12 16l1-7.26c0-.28.3-.4.54-.35l6.5 2.16c.19.08.3.23.3.41zM5.83 8.2L12 6.12l6.17 2.07-1.72-3.14h1.66l-.47-1.37a.4.4 0 00-.39-.3h-4.14v-.97c0-.23-.2-.41-.4-.41H11.3c-.21 0-.41.18-.41.41v.98H6.75a.4.4 0 00-.4.29L5.9 5.05h1.66L5.83 8.19z"></path></svg></svg>} {...a11yProps(5)} />
                </Tabs>

            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={styles.hotelContainer}>
                    <div className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Going to" : <div><div className={styles.checkInHeading}>Going to</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Goa", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Goa</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Check-in</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Check-out</div>
                            <div className={styles.checkinDate}>{`${endDate.getDate()} ${monthNames[endDate.getMonth()]} ${sort_year(endDate)}`}</div>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <MaterialUIPickers props={{ handleEndDate }} startDate={startDate} type={"checkOut"} />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hotelTraverls}`} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("inline") }}>
                        <PersonIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Travelers</div>
                            <div className={styles.checkinDate}>{trevelersRoomCnt} room, {AdultsTrevelers} travelers</div>
                        </div>
                        {/* ---------slecting traverlers and room--------- */}
                        <div className={styles.traverlersPopup} style={{ display: `${trevelersPopupOpen}` }}>
                            <div>
                                <h3 className={styles.travelersPopupHeading}>Travelers</h3>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Room (Max 4 Adults/per room)</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(trevelersRoomCnt === 1) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersRoomCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{trevelersRoomCnt}</h3>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(trevelersRoomCnt === 5) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersRoomCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Adults</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(AdultsTrevelers === 1) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{AdultsTrevelers}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleAdulTrevelersCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Children (Ages 5 to 12)</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(childrenCnt === 0) ? 0.5 : 1}` }} onClick={(e) => { handleChildrenCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{childrenCnt}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleChildrenCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', paddingLeft: "10px" }}><button className={styles.trevelersSelectingDone} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("none") }}>Done</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={styles.hotelContainer}>
                    <div style={{ width: "32%" }} className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleFlightLeavingOpenSearchPopup(e) }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(flightLeavingVal === "") ? "Leaving from" : <div><div className={styles.checkInHeading}>Leaving from</div>
                                <div className={styles.checkinDate}>{flightLeavingVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${flightLeavingSearchPopup}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleFlightLeavingCloseSearchPopup("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleFlightLeavingCloseSearchPopup(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "32%" }} className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }}>
                        <div className={styles.swapIconDiv} onClick={(e) => { e.stopPropagation(); handleSwap(); }}><SwapHorizSharpIcon className={styles.swapIcon} /></div>

                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Going to" : <div><div className={styles.checkInHeading}>Going to</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '28%' }} className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Departing</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className={styles.hotelContainer}>
                    <div style={{ width: "35%" }} className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Pick up" : <div><div className={styles.checkInHeading}>Pick up</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '28%' }} className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Pick-up date</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                    <div style={{ width: '28%' }} className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Drop-off date</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>

                </div>

                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className={styles.hotelContainer}>
                    <div className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Going to" : <div><div className={styles.checkInHeading}>Going to</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                    
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Check-in</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Check-out</div>
                            <div className={styles.checkinDate}>{`${endDate.getDate()} ${monthNames[endDate.getMonth()]} ${sort_year(endDate)}`}</div>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <MaterialUIPickers props={{ handleEndDate }} startDate={startDate} type={"checkOut"} />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hotelTraverls}`} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("inline") }}>
                        <PersonIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Travelers</div>
                            <div className={styles.checkinDate}>{trevelersRoomCnt} room, {AdultsTrevelers} travelers</div>
                        </div>
                        {/* ---------slecting traverlers and room--------- */}
                        <div className={styles.traverlersPopup} style={{ display: `${trevelersPopupOpen}` }}>
                            <div>
                                <h3 className={styles.travelersPopupHeading}>Travelers</h3>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Room (Max 4 Adults/per room)</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(trevelersRoomCnt === 1) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersRoomCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{trevelersRoomCnt}</h3>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(trevelersRoomCnt === 5) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersRoomCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Adults</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(AdultsTrevelers === 1) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{AdultsTrevelers}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleAdulTrevelersCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Children (Ages 5 to 12)</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(childrenCnt === 0) ? 0.5 : 1}` }} onClick={(e) => { handleChildrenCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{childrenCnt}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleChildrenCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', paddingLeft: "10px" }}><button className={styles.trevelersSelectingDone} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("none") }}>Done</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className={styles.hotelContainer}>
                    <div className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }} style={{ width: "50%" }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Things to do in" : <div><div className={styles.checkInHeading}>Things to do in</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`} style={{ width: "21%" }}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>From</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                    <div className={`${styles.hotelBtns} ${styles.hoteldateBtn}`} style={{ width: "21%" }}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>To</div>
                            <div className={styles.checkinDate}>{`${endDate.getDate()} ${monthNames[endDate.getMonth()]} ${sort_year(endDate)}`}</div>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <MaterialUIPickers props={{ handleEndDate }} startDate={startDate} type={"checkOut"} />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <div className={styles.hotelContainer} style={{ flexWrap: 'wrap' }}>
                    <div style={{ width: "47%", marginBottom: "20px" }} className={`${styles.hotelBtns} ${styles.hotelGoingToBtn}`} onClick={(e) => { handleOpenLocation(e) }}>
                        <LocationOnIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            {(goingToVal === "") ? "Going to" : <div><div className={styles.checkInHeading}>Going to</div>
                                <div className={styles.checkinDate}>{goingToVal}</div></div>}
                        </div>
                        {/* -------Searching pop up bar------- */}
                        <div className={styles.searchBox} style={{ display: `${openLocationSearch}` }}>
                            <input ref={searchRef} value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" className={styles.searchInput} placeholder="Where are you going?" />
                            <div className={styles.searchResultHight}>
                                <div className={styles.SearchResult}>
                                    <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation("Delhi", e) }}>
                                        <RestoreIcon className={styles.searchIcon} />
                                        <div className={styles.SearchResultsMapping}>
                                            <strong>Delhi</strong>
                                            <div>IN</div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    searchQueryResult.map((data) => {
                                        return <div key={uuid()} className={styles.SearchResult}>
                                            <div className={styles.SearchResultIndividual} onClick={(e) => { handleCloseLocation(`${data.name}`, e) }}>
                                                <LocationOnIcon className={styles.searchIcon} />
                                                <div className={styles.SearchResultsMapping}>
                                                    <strong>{data.name}</strong>
                                                    <div>{data.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "47%", marginBottom: "20px" }} className={`${styles.hotelBtns} ${styles.hotelTraverls}`} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("inline") }}>
                        <PersonIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Travelers in the cabin</div>
                            <div className={styles.checkinDate}>{AdultsTrevelers} travelers</div>
                        </div>
                        {/* ---------slecting traverlers and room--------- */}
                        <div className={styles.traverlersPopup} style={{ display: `${trevelersPopupOpen}` }}>
                            <div>
                                <h3 className={styles.travelersPopupHeading}>Travelers</h3>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Adults</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(AdultsTrevelers === 1) ? 0.5 : 1}` }} onClick={(e) => { handleAdulTrevelersCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{AdultsTrevelers}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleAdulTrevelersCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.trevelersFlexContainer}>
                                <h3 className={styles.treveleresAdultSelector}>Children (Ages 5 to 12)</h3>
                                <div className={styles.trevelersFlexChild}>
                                    <div className={styles.increseDecreaseIcon} style={{ opacity: `${(childrenCnt === 0) ? 0.5 : 1}` }} onClick={(e) => { handleChildrenCnt(e, -1) }}>
                                        <RemoveIcon className={styles.incDecIcon} />
                                    </div>
                                    <h3>{childrenCnt}</h3>
                                    <div className={styles.increseDecreaseIcon} onClick={(e) => { handleChildrenCnt(e, 1) }}>
                                        <AddIcon className={styles.incDecIcon} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', paddingLeft: "10px" }}><button className={styles.trevelersSelectingDone} onClick={(e) => { e.stopPropagation(); setTrevelersPopupOpen("none") }}>Done</button></div>
                        </div>
                    </div>
                    <div style={{ width: "47%" }} className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Departs as early as</div>
                            <div className={styles.checkinDate}>{`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${sort_year(startDate)}`}</div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <MaterialUIPickers props={{ handleStartDate }} type={"checkIn"} />
                            </MuiPickersUtilsProvider>

                        </div>
                    </div>
                    <div style={{ width: "47%" }} className={`${styles.hotelBtns} ${styles.hoteldateBtn}`}>
                        <EventIcon className={styles.Icon} />
                        <div className={styles.HeadingGoingto}>
                            <div className={styles.checkInHeading}>Departs as late as</div>
                            <div className={styles.checkinDate}>{`${endDate.getDate()} ${monthNames[endDate.getMonth()]} ${sort_year(endDate)}`}</div>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <MaterialUIPickers props={{ handleEndDate }} startDate={startDate} type={"checkOut"} />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); handleHotelSearch(); }}>Search</button>
                </div>
            </TabPanel>
        </div>
    );
}

