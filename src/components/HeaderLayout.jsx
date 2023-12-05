import { Box, Container, CssBaseline, Tooltip, Button, Link } from '@mui/material'

const HeaderLayout = () => {
  return (
    <header>
      <CssBaseline />
      <Container sx={{display: 'flex', justifyContent: 'space-around'}}>
        <h1 className="title">Alexander Peremitin</h1>
        <Box sx={{alignSelf: 'center'}}>
          <Button>
            <Link href="https://github.com/qwpwork" target="_blank">GitHub</Link>
          </Button>
        </Box>
        <Tooltip className="feedback" title="Feedback">
          <Button>Let's talk</Button>
        </Tooltip>
      </Container>
    </header>
  )
}

export default HeaderLayout;