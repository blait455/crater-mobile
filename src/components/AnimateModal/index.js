// @flow

import React from 'react';
import Modal from "react-native-modal";
import styles from './styles';
import { StatusBar } from 'react-native';
import { colors } from '../../styles/colors';

type IProps = {
    onToggle: Function,
    visible: Boolean,
    modalProps: Object
}

export class AnimateModal extends React.Component<IProps> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { onToggle, visible, children, modalProps } = this.props
        return (
            <Modal
                isVisible={visible}
                animationIn={"fadeIn"}
                animationOut={'fadeOut'}
                onBackdropPress={() => onToggle()}
                backdropTransitionInTiming={100}
                backdropTransitionOutTiming={0}
                onBackButtonPress={() => onToggle()}
                style={styles.modalContainer}
                {...modalProps}
            >

                <StatusBar
                    backgroundColor={colors.secondary}
                    barStyle={"dark-content"}
                    translucent={true}
                />

                {children}
            </Modal>
        );
    }
}
