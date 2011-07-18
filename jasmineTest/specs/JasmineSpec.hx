package jasmineTest.specs;
import haxe.Timer;
import jasmine.J;
import jasmine.Jasmine;
import js.Lib;

class JasmineSpec {

	public function new() {
		J.describe_("Jasmine", function() {
			
			J.it_("should have Env", function() {
				J.expect_(Jasmine.getEnv()).toBeDefined();
			} );
			
			J.it_("should have TrivialReporter", function() {
				J.expect_(Jasmine.newTrivialReporter()).toBeDefined();
			} );
			
			J.it_("should run", function() {
				J.runs_(function() {
					J.expect_(true).toBe(true);
				} );
			} );
			
			J.it_("should wait", function() {
				var jasmineIsCool:Int = 0;
				
				J.runs_(function() {
					Timer.delay(function() { jasmineIsCool++; }, 250);	
				});
				
				J.runs_(function() {
					J.expect_(jasmineIsCool).toEqual(0);
				});
				
				J.waits_(500);
				
				J.runs_(function() {
					J.expect_(jasmineIsCool).toEqual(1);
				} );
			} );
			
			J.it_("should wait for", function() {
				var jasmineIsCool:Int = 0;
				
				J.runs_(function() {
					Timer.delay(function() { jasmineIsCool++; }, 250);	
				});
				
				J.runs_(function() {
					J.expect_(jasmineIsCool).toEqual(0);
				});
				
				J.waitsFor_(function() { 
					return jasmineIsCool == 1;
				}, "jasmineIsCool to equal 1" );
				
				J.runs_(function() {
					J.expect_(jasmineIsCool).toEqual(1);
				} );
			} );
			
		} );
	}
	
}