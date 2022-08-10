import React from 'react'
import { Switch } from 'react-router'
import Layout from '../layout/Layout'
import  Pages  from "../pages";

const Routes = () => {
    return (
        <Switch>
        <Layout>
          <Pages />
        </Layout>
      </Switch>
    )
}

export default Routes

