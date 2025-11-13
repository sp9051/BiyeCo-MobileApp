import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FormHeader from './FormHeader';
import ProgressIndicator from './ProgressIndicator';
import MaritalStatusSelector from './MaritalStatusSelector';
import OccupationInputs from './OccupationInputs';
import SiblingsChildrenInputs from './SiblingsChildrenInputs';
import ChildrenStatusDisplay from './ChildrenStatusDisplay';
import ContinueButton from './ContinueButton';

const FamilyDetailsForm = () => {
    const [maritalStatus, setMaritalStatus] = useState('Never Married');
    const [fatherOccupation, setFatherOccupation] = useState('');
    const [motherOccupation, setMotherOccupation] = useState('');
    const [siblings, setSiblings] = useState('0');
    const [children, setChildren] = useState('0');
    const [childrenStatus, setChildrenStatus] = useState('Living with me');

    const handleBackPress = () => {
        console.log('Back button pressed');
    };

    const handleContinue = () => {
        console.log('Form submitted', {
            maritalStatus,
            fatherOccupation,
            motherOccupation,
            siblings,
            children,
            childrenStatus,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <FormHeader onBackPress={handleBackPress} />
                <ProgressIndicator />
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.formContent}>
                        <MaritalStatusSelector
                            selectedStatus={maritalStatus}
                            onStatusChange={setMaritalStatus}
                        />
                        <OccupationInputs
                            fatherOccupation={fatherOccupation}
                            motherOccupation={motherOccupation}
                            onFatherOccupationChange={setFatherOccupation}
                            onMotherOccupationChange={setMotherOccupation}
                        />
                        <SiblingsChildrenInputs
                            siblings={siblings}
                            children={children}
                            onSiblingsChange={setSiblings}
                            onChildrenChange={setChildren}
                        />
                        <ChildrenStatusDisplay childrenStatus={childrenStatus} />
                        <ContinueButton onPress={handleContinue} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 386,
        paddingTop: 10,
        paddingBottom: 28,
        alignItems: 'center',
        borderRadius: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 386,
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    formContent: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 24,
    },
});

export default FamilyDetailsForm;
