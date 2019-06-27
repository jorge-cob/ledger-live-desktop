// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { discreetModeSelector } from 'reducers/settings'
import { toggleDiscreetMode } from 'actions/settings'

export const DiscreetModeContext = React.createContext(
    {
    }
)

const mapStateToProps = state => ({
    discreetMode: discreetModeSelector(state),
})

const mapDispatchToProps = { toggleDiscreetMode }

class DiscreetModeWrapper extends PureComponent<Props> {
    render() {
        const { discreetMode, toggleDiscreetMode, children } = this.props
        return (
            <DiscreetModeContext.Provider value={{ discreetMode, toggleDiscreetMode }}>
                {children}
            </DiscreetModeContext.Provider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiscreetModeWrapper)
