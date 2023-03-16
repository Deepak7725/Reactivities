import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDasboard';
import { v4 as uuid } from 'uuid';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [SelectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      })
  }, [])

  function handlesSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handlesCancelActivity() {
    setSelectedActivity(undefined);
  }

  function handlesFormOpen(id?: string) {
    id ? handlesSelectActivity(id) : handlesCancelActivity()
    setEditMode(true);
  }

  function handlesFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }
  return (
    <>
      <NavBar FormOpen={handlesFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities}
          selectedActivity={SelectedActivity}
          selectActivity={handlesSelectActivity}
          cancelActivity={handlesCancelActivity}
          editMode={editMode}
          FormOpen={handlesFormOpen}
          FormClose={handlesFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>




    </>
  );
}

export default App;
