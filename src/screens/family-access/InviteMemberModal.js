import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Modal,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { CloseIcon } from './IconComponents';

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
        handleClose();
    };

    const handleClose = () => {
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
            onRequestClose={handleClose}
        >
            <Pressable style={styles.overlay} onPress={handleClose}>
                <Pressable style={styles.modal} onPress={(e) => e.stopPropagation()}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Invite Family Member</Text>
                        <Pressable style={styles.closeButton} onPress={handleClose}>
                            <CloseIcon width={12} height={16} color="#6B7280" />
                        </Pressable>
                    </View>

                    <ScrollView style={styles.content}>
                        <View style={styles.nameRow}>
                            <View style={styles.nameField}>
                                <Text style={styles.label}>First Name *</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First name"
                                    value={firstName}
                                    onChangeText={setFirstName}
                                />
                            </View>
                            <View style={styles.nameField}>
                                <Text style={styles.label}>Last Name *</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last name"
                                    value={lastName}
                                    onChangeText={setLastName}
                                />
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Relation *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Select relation"
                                value={relation}
                                onChangeText={setRelation}
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Email Address *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="parent@example.com"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.field}>
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
                    </ScrollView>

                    <View style={styles.footer}>
                        <Pressable style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Send Invitation</Text>
                        </Pressable>
                        <Pressable style={styles.cancelButton} onPress={handleClose}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    modal: {
        width: '100%',
        maxWidth: 352,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
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
        paddingVertical: 11,
        paddingHorizontal: 8,
        borderRadius: 6,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 23,
        paddingTop: 23,
    },
    nameRow: {
        flexDirection: 'row',
        gap: 13,
        marginBottom: 20,
    },
    nameField: {
        flex: 1,
    },
    field: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 17,
        fontSize: 16,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
    },
    phoneRow: {
        flexDirection: 'row',
        gap: 11,
    },
    countryCode: {
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
    },
    countryCodeText: {
        fontSize: 16,
        color: '#000000',
    },
    phoneInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 17,
        fontSize: 16,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
    },
    footer: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopWidth: 0.667,
        borderTopColor: '#E5E7EB',
        alignItems: 'center',
    },
    submitButton: {
        width: '100%',
        maxWidth: 320,
        padding: 12,
        backgroundColor: '#53377A',
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 10,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    cancelButton: {
        padding: 5,
    },
    cancelButtonText: {
        color: '#111827',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    },
});

export default InviteMemberModal;
