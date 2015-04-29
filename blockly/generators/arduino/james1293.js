//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Arduino.james1293');

goog.require('Blockly.Arduino');


Blockly.Arduino.inout_digital_on = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + 'HIGH' + ');\n'
  return code;
};


Blockly.Arduino.inout_digital_off = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + 'LOW' + ');\n'
  return code;
};


Blockly.Arduino.controls_if_else_simple = function() {
  // Based on If/elseif/else condition.
  //var n = 0;
  var argument = Blockly.Arduino.valueToCode(this, 'IF',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '\n}';
  //for (n = 1; n <= this.elseifCount_; n++) {
  //  argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
  //    Blockly.Arduino.ORDER_NONE) || 'false';
  //  branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
  //  code += ' else if (' + argument + ') {\n' + branch + '}';
  //}
  //if (this.elseCount_) {
    branch = Blockly.Arduino.statementToCode(this, 'ELSE');
    code += ' else {\n' + branch + '\n}';
  //}
  
  
  
  
  return code + '\n';
};
