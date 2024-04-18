/**
 * DISPEX API Test - V3.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import StreetPrefixDto from './StreetPrefixDto';

/**
 * The StreetDto model module.
 * @module model/StreetDto
 * @version 3.0
 */
class StreetDto {
    /**
     * Constructs a new <code>StreetDto</code>.
     * @alias module:model/StreetDto
     */
    constructor() { 
        
        StreetDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StreetDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreetDto} obj Optional instance to populate.
     * @return {module:model/StreetDto} The populated <code>StreetDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreetDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = StreetPrefixDto.constructFromObject(data['prefix']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cityId')) {
                obj['cityId'] = ApiClient.convertToType(data['cityId'], 'Number');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('nameWithPrefix')) {
                obj['nameWithPrefix'] = ApiClient.convertToType(data['nameWithPrefix'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreetDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreetDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `prefix`
        if (data['prefix']) { // data not null
          StreetPrefixDto.validateJSON(data['prefix']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['nameWithPrefix'] && !(typeof data['nameWithPrefix'] === 'string' || data['nameWithPrefix'] instanceof String)) {
            throw new Error("Expected the field `nameWithPrefix` to be a primitive type in the JSON string but got " + data['nameWithPrefix']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
StreetDto.prototype['id'] = undefined;

/**
 * @member {module:model/StreetPrefixDto} prefix
 */
StreetDto.prototype['prefix'] = undefined;

/**
 * @member {String} name
 */
StreetDto.prototype['name'] = undefined;

/**
 * @member {Number} cityId
 */
StreetDto.prototype['cityId'] = undefined;

/**
 * @member {String} city
 */
StreetDto.prototype['city'] = undefined;

/**
 * @member {String} nameWithPrefix
 */
StreetDto.prototype['nameWithPrefix'] = undefined;






export default StreetDto;
