const mongoose = require('mongoose');

const paymentSettingsSchema = new mongoose.Schema({
  qrCodeUrl: String,
  upiId: String,
  bankDetails: {
    accountName: String,
    accountNumber: String,
    bankName: String,
    ifscCode: String
  },
  walletDetails: {
    walletType: String,
    walletId: String
  },
  paymentInstructions: String,
  supportContact: String,
  isQREnabled: {
    type: Boolean,
    default: true
  },
  isBankEnabled: {
    type: Boolean,
    default: false
  },
  isWalletEnabled: {
    type: Boolean,
    default: false
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PaymentSettings', paymentSettingsSchema);
