package jasmineTest.specs;
import haxe.Timer;
import jasmine.J;
import jasmine.Jasmine;
import js.Lib;

class JasmineSpec {

	public function new() {
		J.describe("Jasmine", function() {
			
			J.it("should have Env", function() {
				J.expect(Jasmine.getEnv()).toBeDefined();
			} );
			
			J.it("should have TrivialReporter", function() {
				J.expect(Jasmine.newTrivialReporter()).toBeDefined();
			} );
			
			J.it("should run", function() {
				J.runs(function() {
					J.expect(true).toBe(true);
				} );
			} );
			
			J.it("should wait", function() {
				var jasmineIsCool:Int = 0;
				
				J.runs(function() {
					Timer.delay(function() { jasmineIsCool++; }, 250);	
				});
				
				J.runs(function() {
					J.expect(jasmineIsCool).toEqual(0);
				});
				
				J.waits(500);
				
				J.runs(function() {
					J.expect(jasmineIsCool).toEqual(1);
				} );
			} );
			
			J.it("should wait for", function() {
				var jasmineIsCool:Int = 0;
				
				J.runs(function() {
					Timer.delay(function() { jasmineIsCool++; }, 250);	
				});
				
				J.runs(function() {
					J.expect(jasmineIsCool).toEqual(0);
				});
				
				J.waitsFor(function() { 
					return jasmineIsCool == 1;
				}, "jasmineIsCool to equal 1" );
				
				J.runs(function() {
					J.expect(jasmineIsCool).toEqual(1);
				} );
			} );
			
		} );
	}
	
}