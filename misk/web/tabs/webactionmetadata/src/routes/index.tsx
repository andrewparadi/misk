import * as React from "react"
import { Route, Switch } from "react-router"
import { TabContainer } from "../containers"

const routes = (
  <div>
    <Switch>
      <Route path="/_admin/webactionmetadata/" component={TabContainer}/>
      <Route path="/_tab/webactionmetadata/" component={TabContainer}/>
      {/* Do not include a Route without a path or it will display during on all tabs */}
    </Switch>
  </div>
)

export default routes