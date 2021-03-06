import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { ReportProblemIcon } from '../common/MaterialIcons'

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit}px`
  },
  wrapper: {
    maxWidth: 600
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  orangeAvatar: {
    backgroundColor: 'orange'
  }
})

const Stock = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container wrap='nowrap' spacing={16}>
            <Grid item>
              <Avatar className={classes.orangeAvatar}>
                <ReportProblemIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant='headline' component='h4'>
                Stock. Work in Progress...
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

Stock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Stock)
