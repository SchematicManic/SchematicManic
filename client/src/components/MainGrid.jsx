import React from 'React';
import { Grid, Image } from 'semantic-ui-react'

const MainGrid = () => (
    <Grid class="grid" celled>
        <Grid.Row>
            <Grid.Column width={3}>
                <Image src='./assets/solar-panels.png' />
            </Grid.Column>
            <Grid.Column width={13}>
                <Image src='/assets/Solar-Home.png' />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={3}>
                {/* <Image src='/assets/images/wireframe/image.png' /> */}
            </Grid.Column>
            <Grid.Column width={10}>
                {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
            </Grid.Column>
            <Grid.Column width={3}>
                {/* <Image src='/assets/images/wireframe/image.png' /> */}
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default MainGrid;