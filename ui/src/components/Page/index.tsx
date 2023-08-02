import React from 'react';
import Box from '@mui/material/Box';

export default function Page({ children }: { children?: React.ReactNode }) {
	return <Box sx={{ margin: 'auto', marginTop: '24px', maxWidth: '700px', px: { xs: '20px' } }}>{children}</Box>;
}
