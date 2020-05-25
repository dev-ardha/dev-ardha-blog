import Link from "../Link";
import Cookie from 'js-cookie'

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StarIcon from '@material-ui/icons/Star';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Router from "next/router";

const date = new Date();

const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
const time = `${date.getHours()}:${date.getMinutes()}`

const dateNow = `${monthName[month]} ${day} ${year}`;

const DashboardHeader = ()=> {

    const logout = () =>{
        Cookie.remove("_token");
        Router.push('/');
    }

    return(
        <div>
            <div className="dashboard-header">
                <p className="header-time">{dateNow}</p>
            </div>
            <div className="dashboard-nav" >
                <Link activeClassName="active" href="/dashboard"><a className="nav-link" ><span className="header-icon"><DashboardIcon style={{ fontSize: '1rem'}}/></span>Dasboard</a></Link>
                <Link activeClassName="active" href="/dashboard/posts"><a className="nav-link" ><span className="header-icon"><AssignmentIcon style={{ fontSize: '1rem' }}/></span>Posts</a></Link>
                <Link activeClassName="active" href="/dashboard/projects"><a className="nav-link" ><span className="header-icon"><StarIcon style={{ fontSize: '1rem' }}/></span>Projects</a></Link>
                <Link activeClassName="active" href="/dashboard/gallery"><a className="nav-link" ><span className="header-icon"><PhotoCameraIcon style={{ fontSize: '1rem' }}/></span>Gallery</a></Link>
                <span className="user-info">
                    <a className="nav-link logout" onClick={logout}>Sign Out</a>
                    {/* <button className="user-image"></button> */}
                </span>
            </div>
            <style jsx>{`
            
            .user-info{
                display:flex;
                margin-left:auto;
                align-items:center;
                position:relative;
            }
            .user-image{
                height:30px;
                width:30px;
                background-color: #fff;
                border:none;
                cursor:pointer;
                border-radius:50%;
                position:relative;
            }
            .active{
                background-color:#0f78de;
            }
            .dashboard-header{
                display:flex;
                justify-content:center;
                background-color:#292929;
                padding: 8px 0;
            }
            .header-time{
                font-size:.8rem;
                color:#fff;
            }
            .dashboard-nav{
                display:flex;
                padding: 0 10%;
                align-items:center;
                background-color:#0081ff;
            }
            .header-icon{
                transform: translateY(2px);
                margin-right:5px;
            }
            .nav-link{
                padding: 15px 20px;
                color:#fff;
                font-size:.9rem;
                display:flex;
                align-items:center;
            }
            
            `}</style>
        </div>
    )
}

export default DashboardHeader;