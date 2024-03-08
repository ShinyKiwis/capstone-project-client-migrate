"use client"
import { CreateRoleModal, RoleCard } from '@/app/_components';
import { Grid } from '@mantine/core';

const Roles = () => {
  return (
    <div>
      <CreateRoleModal />
      {/* <Grid>
        <Grid.Col span={4}><RoleCard role="Fuhrer" description="Touch me and you die"/></Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
      </Grid> */}
    </div>
  )
}

export default Roles