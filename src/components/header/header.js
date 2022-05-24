import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const Header = (props) => {
	return (
		<Box sx={{ flex: 1 }}>
			<AppBar
				position='relative'
				color='transparent'
				sx={{ borderRadius: 10 }}
			>
				<Toolbar>
					<Button
						href='/'
						variant='contained'
						color='inherit'
						sx={{ flexGrow: 4, borderRadius: 10, marginX: 1 }}
						startIcon={<AccessibilityNewRoundedIcon />}
					>
						Dhuro
					</Button>
					<Button
						href='/story/create'
						variant='contained'
						color='inherit'
						sx={{ flexGrow: 1, borderRadius: 10, marginX: 1 }}
						startIcon={<AddRoundedIcon />}
					>
						Shto
					</Button>
					<Button
						style={{ backgroundColor: '#213123', color: 'white' }}
						color='inherit'
						variant='contained'
						sx={{
							flexGrow: 1,
							borderRadius: 10,
							marginX: 1,
						}}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
