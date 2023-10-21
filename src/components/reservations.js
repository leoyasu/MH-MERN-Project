import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../styles/reservations.css';
import DoctorCard from "./doctorCard";
import { GetDoctors } from "../service/doctorService";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { loadDoctors , filterDoctors , setSearchValue} from "../redux/actions/doctorAction";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '300px !important',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


function Reservations() {
    const searchValue = useSelector((store) => store.storeDoctors.searchValue);
    const filteredDoctors = useSelector((store) => store.storeDoctors.filteredDoctors);
    const dispatch = useDispatch()

    useEffect(() => {
        GetDoctors()
            .then((doctorData) => {
                dispatch(loadDoctors(doctorData));
            })
            .catch((error) => console.error("Error setting doctors:", error));
    }, [dispatch]);

    useEffect(() => {
        dispatch(filterDoctors(searchValue));
    }, [dispatch, searchValue]);


    const handleSearchChange = (event) => {
        dispatch(setSearchValue(event.target.value));
    };

    return (
        <>
            <Box className="reservationsBox"
                sx={{
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <div>
                        <Typography variant="h3" sx={{
                            fontFamily: 'Open Sans',
                            mt: '1rem',
                            textAlign: 'center',
                            color: '#000080'
                        }}>
                            We care about your health
                        </Typography>
                        <Typography variant="h4" sx={{
                            fontFamily: 'Open Sans',
                            mt: '1rem',
                            textAlign: 'center',
                            color: '#000080'
                        }}>
                            Get to know our professionals and specialties
                        </Typography>
                    </div>

                    <Box sx={{ flexGrow: 0 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search specialty…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                        </Search>
                    </Box>

                    <Grid container spacing={1} sx={{ width: 'inherit', m: '1rem' }}>
                        {filteredDoctors.map((doctor, index) => (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ margin: 'auto' }}>
                                <DoctorCard doctor={doctor} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Reservations;