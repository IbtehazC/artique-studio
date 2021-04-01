import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  navBar: {
    background: '#222'
  },

  navItems: {
    height: '64px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  navLinks: {
    height: '100%',
    width: '400px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  wrapper: {
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    width: '1000px',
    height: '100%',
    color: 'white',
  },

  headerDiv: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '16px',
    paddingBottom: '16px',
  },

  title: {
    fontSize: '32px'
  },

  summaryDiv: {
    paddingBottom: '32px'
  },
  summary: {
    marginTop: '15px',
    textAlign: 'left',
    lineHeight: '1.6',
    fontSize: '16px',
  },


  flexItemDiv: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '16px',
  },
  contactIcons: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '32px'
  },
  icons: {
    transition: 'all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    "&:hover": {
      color: '#13aff0',
      backgroundColor: 'transparent'
    }
  },

  chip: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: '32px'
  },

  contactDiv: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  container: {
    height: 400,
    width: 1200,
    justifyContent: 'space-between'
  },

  typography: {
    padding: 20,
    backgroundColor: 'grey',
    color: 'white',
  },

  divider: {
    paddingTop: '5px',
    backgroundColor: 'white',
    marginTop: '15px'
  },

  root: {
    maxWidth: 275,
    marginTop: 20,
    backgroundColor: '#333'
  },

  rootSecond: {
    marginLeft: 80,
    maxWidth: 275,
    marginTop: 20,
    backgroundColor: '#333'
  },

  pos: {
    marginBottom: 12,
  },

  place: {
    display: 'flex'
  },


  divCorrection1: {
    width: 355
  },

  divCorrection2: {
    width: 645
  },

}

);