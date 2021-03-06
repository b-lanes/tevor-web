// Container for Job input fields
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import green from '@material-ui/core/colors/green'

const styles = () => ({
  greenButton: {
    color: 'white',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  gridMargin: {
    marginBottom: 8
  }
})

const JobInputs = props => {
  const { classes } = props

  return (
    <div>
      <Grid container>
        <Grid item xs={10}
          className={classes.gridMargin}
        >
          <Grid container spacing={16} className={classes.gridMargin}>
            <Grid item xs={4}>
              <TextField
                disabled
                fullWidth
                value='35-209900-176148-23'
                label='IMEI' />
            </Grid>
            <Grid item xs={3}>
              <TextField
                disabled
                fullWidth
                value='TP-12450'
                label='JOBNO' />
            </Grid>
          </Grid>
          <Grid container spacing={16} className={classes.gridMargin}>
            <Grid item xs={4}>
              <TextField
                disabled
                fullWidth
                value='XIAOMI'
                label='BRAND' />
            </Grid>
            <Grid item xs={5}>
              <TextField
                disabled
                fullWidth
                value='HONGMI NOTE 99999'
                label='MODEL' />
            </Grid>
          </Grid>
          <Grid container spacing={16} className={classes.gridMargin}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor='storage'>Storage</InputLabel>
                <Input
                  disabled
                  value='128'
                  id='storage'
                  endAdornment={<InputAdornment position='end'>GB</InputAdornment>}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                disabled
                fullWidth
                value='BLACK'
                label='COLOR' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Button fullWidth variant='contained'>ASSIGN</Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant='contained'>START</Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth color='primary' variant='contained'>FINISH</Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth className={classes.greenButton} variant='contained'>APPROVE</Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth color='secondary' variant='contained'>CANCEL</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

JobInputs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(JobInputs)
