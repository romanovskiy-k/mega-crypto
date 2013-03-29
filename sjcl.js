/** @fileOverview Low-level AES implementation.
 *
 * This file contains a low-level implementation of AES, optimized for
 * size and for efficiency on several browsers.  It is based on
 * OpenSSL's aes_core.c, a public-domain implementation by Vincent
 * Rijmen, Antoon Bosselaers and Paulo Barreto.
 *
 * An older version of this implementation is available in the public
 * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
 * Stanford University 2008-2010 and BSD-licensed for liability
 * reasons.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/**
 * Schedule out an AES key for both encryption and decryption.  This
 * is a low-level class.  Use a cipher mode to do bulk encryption.
 *
 * @constructor
 * @param {Array} key The key as an array of 4, 6 or 8 words.
 *
 * @class Advanced Encryption Standard (low-level interface)
 */
sjcl.cipher.aes = function(keyLabel) {
	if (plugin === undefined) {
		throw new sjcl.exception.invalid("plugin not initialized");
	}

	if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
		throw new sjcl.exception.invalid("invalid aes key size");
	}
	console.log('init fake aes with key ', keyLabel);
	this.keyLabel = 'secretKey';
};

sjcl.cipher.aes.prototype = {
	keyLabel: null;
	result: null;
	/**
	 * Encrypt an array of 4 big-endian words.
	 * @param {Array} data The plaintext.
	 * @return {Array} The ciphertext.
	 */
	encrypt: function(data) {
		return this._crypt(data, 0);
	},

	/**
	 * Decrypt an array of 4 big-endian words.
	 * @param {Array} data The ciphertext.
	 * @return {Array} The plaintext.
	 */
	decrypt: function(data) {
		return this._crypt(data, 1);
	},

	/**
	 * Encryption and decryption core.
	 * @param {Array} input Four words to be encrypted or decrypted.
	 * @param dir The direction, 0 for encrypt and 1 for decrypt.
	 * @return {Array} The four encrypted or decrypted words.
	 * @private
	 */
	_crypt: function(input, dir) {
		if (input.length !== 4) {
			throw new sjcl.exception.invalid("invalid aes block size");
		}

		var out = [0, 0, 0, 0];
		if (dir == 0) {
			plugin.pluginObject.encrypt(0, this.keyLabel, a32_to_byteStringArray(input),

			function(cipherText) {
				this.result = true;
				out = byteStringArray_to_a32(cipherText);
			},

			function(err) {
				console.log(err);
			});
		} else {
			plugin.pluginObject.decrypt(0, this.keyLabel, a32_to_byteStringArray(input),

			function(cipherText) {
				this.result = true;
				out = byteStringArray_to_a32(cipherText);
			},

			function(err) {
				console.log(err);
			});			
		}

		while (this.result === null)
		{
			setTimeout(function() {
			    console.log('waiting for crypt to finish');
			}, 1000);			
		}
		this.result = null;
		return out;
	}
};