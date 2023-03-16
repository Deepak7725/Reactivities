import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    FormOpen: (id: string) => void;
    FormClose: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;

}
export default function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelActivity, editMode, FormOpen, FormClose, createOrEdit, deleteActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelActivity}
                        FormOpen={FormOpen}

                    />}
                {editMode &&
                    <ActivityForm
                        FormClose={FormClose}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit}
                    />}
            </Grid.Column>
        </Grid>
    )
}