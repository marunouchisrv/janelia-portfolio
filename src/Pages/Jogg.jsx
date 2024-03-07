import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Jogg() {
  return (
    <div className="jogg">
        <h2>Jogg</h2>
        <Tabs>
        <TabList>
        <Tab>Intro</Tab>
        <Tab>2015-2016</Tab>
        <Tab>2017-2018</Tab>
        <Tab>2019</Tab>
        <Tab>2020-2021</Tab>
        <Tab>2022</Tab>
        </TabList>
        </Tabs>

        <TabPanel>
        
        </TabPanel>
    </div>    
  )
}
