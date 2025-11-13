import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Modal
} from 'react-native';

const CloseIcon = () => (
    <View style={styles.closeIcon} />
);

const InviteMemberModal = ({ visible, onClose, onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [relation, setRelation] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () => {
        onSubmit({
            firstName,
            lastName,
            relation,
            email,
            phoneNumber,
        });
        // Reset form
        setFirstName('');
        setLastName('');
        setRelation('');
        setEmail('');
        setPhoneNumber('');
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose} />
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Invite Family Member</Text>
                        <Pressable onPress={onClose} style={styles.closeButton}>
                            <CloseIcon />
                        </Pressable>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.row}>
                            <View style={styles.field}>
                                <Text style={styles.label}>First Name *</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First name"
                                    value={firstName}
                                    onChangeText={setFirstName}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Last Name *</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last name"
                                    value={lastName}
                                    onChangeText={setLastName}
                                />
                            </View>
                        </View>

                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Relation *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Select relation"
                                value={relation}
                                onChangeText={setRelation}
                            />
                        </View>

                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Email Address *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="parent@example.com"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Phone Number *</Text>
                            <View style={styles.phoneRow}>
                                <View style={styles.countryCode}>
                                    <Text style={styles.countryCodeText}>+880</Text>
                                </View>
                                <TextInput
                                    style={styles.phoneInput}
                                    placeholder="98765XXXXX"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Pressable style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Send Invitation</Text>
                        </Pressable>
                        <Pressable style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modal: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        maxWidth: 352,
        width: '100%',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 0.667,
        borderBottomColor: '#E5E7EB',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 28,
    },
    closeButton: {
        width: 28,
        height: 40,
        borderRadius: 6,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        width: 12,
        height: 16,
        backgroundColor: '#6B7280',
    },
    form: {
        padding: 23,
    },
    row: {
        flexDirection: 'row',
        gap: 13,
        marginBottom: 20,
    },
    field: {
        flex: 1,
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 8,
        lineHeight: 20,
    },
    input: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        color: '#000000',
    },
    phoneRow: {
        flexDirection: 'row',
        gap: 11,
    },
    countryCode: {
        width: 69,
        paddingVertical: 14,
        paddingHorizontal: 13,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countryCodeText: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 19,
    },
    phoneInput: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        color: '#000000',
    },
    footer: {
        borderTopWidth: 0.667,
        borderTopColor: '#E5E7EB',
        padding: 16,
        gap: 10,
        alignItems: 'center',
    },
    submitButton: {
        width: '100%',
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#53377A',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    cancelButton: {
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#111827',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    },
});

export default InviteMemberModal;
