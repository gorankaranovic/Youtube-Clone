import React from 'react'
import { Box, Stack, CircularProgress } from '@mui/material'


const Loader = () => {
  return (
    <Box minHeight="95vh">
        <Stack height="80vh" direction="row" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Stack>
    </Box>
  )
}

export default Loader