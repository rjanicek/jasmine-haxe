package jasmine;
import js.Lib;

/**
 * @link http://pivotal.github.com/jasmine/jsdoc/index.html
 */

class Jasmine {
	public static function getEnv() : Env untyped {
		return jasmine.getEnv();
	}
	
	public static function newTrivialReporter() : Reporter {
		return Lib.eval("new jasmine.TrivialReporter()");
	}
}