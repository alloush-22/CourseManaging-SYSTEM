import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';



const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/teacherstudents',
    icon: <BsIcons.BsPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/teachercourses',
    icon: <ImIcons.ImBooks />,
    cName: 'nav-text'
  },
  
];

export default SidebarData;