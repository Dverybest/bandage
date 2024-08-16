'use client'

import { Box, Typography } from "@mui/material"

const PaymentSuccess = () => {
  return (
    <Box
        height={300}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
    >
        <Typography color={'text.primary'} textAlign={'center'} variant="h2">Payment Successfull</Typography>

    </Box>
  )
}

export default PaymentSuccess